import React, { useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Minus, Save, Trash2, AlertCircle, X, Image as ImageIcon } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { productSchema } from '../../schemas/Product';
type ProductFormData = z.infer<typeof productSchema>;
const initialProduct: ProductFormData = {
  name: '',
  sku: '',
  description: '',
  base_price: 0,
  currency: 'VND',
  stock: 0,
  status: 1,
  images: [],
  attributes: [],
  variants: []
};
const quillModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};

const quillFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link', 'image',
];

const CreateProduct = () => {
  const [newAttributeName, setNewAttributeName] = useState('');
  const [newAttributeValue, setNewAttributeValue] = useState('');
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
    getValues
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: initialProduct
  });

  const attributes = watch('attributes');
  const variants = watch('variants');

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];
    const currentImages = getValues('images');

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          newImages.push(reader.result);
          if (newImages.length === files.length) {
            setValue('images', [...currentImages, ...newImages]);
            setPreviewImages(prev => [...prev, ...newImages]);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  }, [getValues, setValue]);

  const removeImage = (index: number) => {
    const currentImages = getValues('images');
    setValue('images', currentImages.filter((_, i) => i !== index));
    setPreviewImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleAddAttribute = () => {
    if (!newAttributeName) return;
    const currentAttributes = getValues('attributes');
    setValue('attributes', [...currentAttributes, { name: newAttributeName, values: [] }]);
    setNewAttributeName('');
  };

  const handleAddAttributeValue = (attributeIndex: number) => {
    if (!newAttributeValue) return;
    const currentAttributes = [...getValues('attributes')];
    currentAttributes[attributeIndex].values.push(newAttributeValue);
    setValue('attributes', currentAttributes);
    setNewAttributeValue('');
  };

  const handleRemoveAttribute = (index: number) => {
    const currentAttributes = getValues('attributes');
    setValue('attributes', currentAttributes.filter((_, i) => i !== index));
  };

  const handleRemoveAttributeValue = (attributeIndex: number, valueIndex: number) => {
    const currentAttributes = [...getValues('attributes')];
    currentAttributes[attributeIndex].values = currentAttributes[attributeIndex].values.filter(
      (_, i) => i !== valueIndex
    );
    setValue('attributes', currentAttributes);
  };

  const generateVariants = () => {
    const currentAttributes = getValues('attributes');
    if (currentAttributes.length === 0) return;

    const combinations = currentAttributes.reduce<Record<string, string>[]>(
      (acc, attribute) => {
        if (acc.length === 0) {
          return attribute.values.map(value => ({ [attribute.name]: value }));
        }

        const newCombinations: Record<string, string>[] = [];
        acc.forEach(combination => {
          attribute.values.forEach(value => {
            newCombinations.push({
              ...combination,
              [attribute.name]: value
            });
          });
        });
        return newCombinations;
      },
      []
    );

    const basePrice = getValues('base_price');
    const totalStock = getValues('stock');
    const newVariants = combinations.map(combination => ({
      price: basePrice,
      stock: Math.floor(totalStock / combinations.length),
      attributes: combination
    }));

    setValue('variants', newVariants);
  };

  const onSubmit = async (data: ProductFormData) => {
    try {
      console.log('Submitting product:', data);
      alert('Product saved successfully!');
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Failed to save product');
    }
  };

  const FormError = ({ message }: { message: string }) => (
    <p className="mt-1 text-sm text-red-600 flex items-center">
      <AlertCircle className="h-4 w-4 mr-1" />
      {message}
    </p>
  );

  return (
    <div className="py-8 animate-fadeIn max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Product</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
          
          {/* Product Images */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {previewImages.map((image, index) => (
                <div key={index} className="relative group aspect-square">
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <label className="border-2 border-dashed border-gray-300 rounded-lg aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-burgundy-500 transition-colors">
                <ImageIcon className="h-8 w-8 text-gray-400" />
                <span className="mt-2 text-sm text-gray-500">Add Image</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            {errors.images && <FormError message={errors.images.message!} />}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-burgundy-500 focus:ring-burgundy-500"
                  />
                )}
              />
              {errors.name && <FormError message={errors.name.message!} />}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">SKU</label>
              <Controller
                name="sku"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-burgundy-500 focus:ring-burgundy-500"
                  />
                )}
              />
              {errors.sku && <FormError message={errors.sku.message!} />}
            </div>
          </div>
            
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <Controller
              name="description"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={onChange}
                  modules={quillModules}
                  formats={quillFormats}
                  className="bg-white rounded-md [&_.ql-container]:min-h-[200px] [&_.ql-toolbar]:border-gray-300 [&_.ql-container]:border-gray-300 [&_.ql-toolbar]:rounded-t-md [&_.ql-container]:rounded-b-md"
                />
              )}
            />
            {errors.description && <FormError message={errors.description.message!} />}
          </div>
            
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Base Price</label>
              <Controller
                name="base_price"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <input
                    type="number"
                    value={value}
                    onChange={e => onChange(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:border-burgundy-500 focus:ring-burgundy-500"
                  />
                )}
              />
              {errors.base_price && <FormError message={errors.base_price.message!} />}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Currency</label>
              <Controller
                name="currency"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:border-burgundy-500 focus:ring-burgundy-500"
                  >
                    <option value="VND">VND</option>
                    <option value="USD">USD</option>
                  </select>
                )}
              />
              {errors.currency && <FormError message={errors.currency.message!} />}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Initial Stock</label>
              <Controller
                name="stock"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <input
                    type="number"
                    value={value}
                    onChange={e => onChange(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:border-burgundy-500 focus:ring-burgundy-500"
                  />
                )}
              />
              {errors.stock && <FormError message={errors.stock.message!} />}
            </div>
          </div>
        </div>

        {/* Rest of the form remains the same */}
        {/* Attributes Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Attributes</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={newAttributeName}
                onChange={e => setNewAttributeName(e.target.value)}
                placeholder="Attribute name (e.g., Size, Color)"
                className="flex-1 rounded-md border-gray-300 focus:border-burgundy-500 focus:ring-burgundy-500"
              />
              <button
                type="button"
                onClick={handleAddAttribute}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-burgundy-600 hover:bg-burgundy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Attribute
              </button>
            </div>

            {attributes.map((attribute, attributeIndex) => (
              <div key={attributeIndex} className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">{attribute.name}</h3>
                  <button
                    type="button"
                    onClick={() => handleRemoveAttribute(attributeIndex)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="flex gap-4 mb-2">
                  <input
                    type="text"
                    value={newAttributeValue}
                    onChange={e => setNewAttributeValue(e.target.value)}
                    placeholder={`Add ${attribute.name} value`}
                    className="flex-1 rounded-md border-gray-300 focus:border-burgundy-500 focus:ring-burgundy-500"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddAttributeValue(attributeIndex)}
                    className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-burgundy-600 hover:bg-burgundy-700"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {attribute.values.map((value, valueIndex) => (
                    <span
                      key={valueIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-burgundy-100 text-burgundy-800"
                    >
                      {value}
                      <button
                        type="button"
                        onClick={() => handleRemoveAttributeValue(attributeIndex, valueIndex)}
                        className="ml-2 inline-flex items-center"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {attributes.length > 0 && (
              <button
                type="button"
                onClick={generateVariants}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-burgundy-600 hover:bg-burgundy-700"
              >
                Generate Variants
              </button>
            )}
          </div>
        </div>

        {/* Variants Section */}
        {variants.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-sm overflow-x-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Variants</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(variants[0].attributes).map(attr => (
                    <th
                      key={attr}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {attr}
                    </th>
                  ))}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {variants.map((variant, index) => (
                  <tr key={index}>
                    {Object.values(variant.attributes).map((value, i) => (
                      <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {value}
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Controller
                        name={`variants.${index}.price`}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <input
                            type="number"
                            value={value}
                            onChange={e => onChange(Number(e.target.value))}
                            className="w-24 rounded-md border-gray-300 focus:border-burgundy-500 focus:ring-burgundy-500"
                          />
                        )}
                      />
                      {errors.variants?.[index]?.price && (
                        <FormError message={errors.variants?.[index]?.price?.message || 'Invalid price'} />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Controller
                        name={`variants.${index}.stock`}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <input
                            type="number"
                            value={value}
                            onChange={e => onChange(Number(e.target.value))}
                            className="w-24 rounded-md border-gray-300 focus:border-burgundy-500 focus:ring-burgundy-500"
                          />
                        )}
                      />
                      {errors.variants?.[index]?.stock && (
                        <FormError message={errors.variants?.[index]?.stock?.message || 'Invalid stock'} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-burgundy-600 hover:bg-burgundy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="h-5 w-5 mr-2" />
            {isSubmitting ? 'Saving...' : 'Save Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;