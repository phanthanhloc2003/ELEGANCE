import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Ptl2003', // Mật khẩu
        database: 'ELEGANCE', // Tên cơ sở dữ liệu
        entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Đường dẫn tới các entity
        synchronize: true, // Đồng bộ schema, chỉ dùng trong development
      });
      return dataSource.initialize(); // Khởi tạo kết nối
    },
  },
];
