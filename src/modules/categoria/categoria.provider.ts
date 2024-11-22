import { DataSource } from "typeorm";
import { Categoria } from "./entities/categoria.entity";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

// Proveedor para inyectar el repositorio de Categoria
export const CategoriaProviders = [
  {
    provide: "CATEGORIA_REPOSITORY",
    useFactory: (config: ConfigService)=>{
      const dataSource= new DataSource({
        type:'postgres',
        host:config.get('HOST') || 'localhost',
        port: +config.get('PORT_DB'),
        username: config.get('USERNAME') || 'root',
        password: config.get('PASSWORD') || 'prueba',
        database: config.get('DATABASE'),
        entities:[
          __dirname + '/../**/*.entity(.ts,.js)',
        ]

      });
      return dataSource.initialize();
    }
  }
];
