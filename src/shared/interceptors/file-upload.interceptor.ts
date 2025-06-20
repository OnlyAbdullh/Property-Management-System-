import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

export function PropertyImagesInterceptor() {
  return UseInterceptors(
    FilesInterceptor('images', 20, {
      storage: diskStorage({
        destination: './uploads/properties/images',
        filename: (req, file, cb) => {
        const propertyId = req.params.propertyId;
        const timestamp = Date.now();
        const ext = extname(file.originalname);
        const safeBaseName = file.originalname
          .replace(/\s+/g, '-')        // replace spaces with dashes
          .replace(/\.[^/.]+$/, '')    // remove original extension
          .replace(/[^a-zA-Z0-9-_]/g, ''); // remove unsafe characters

        const filename = `property-${propertyId}-${safeBaseName}-${timestamp}${ext}`;
        cb(null, filename);
      },
      }),
    }),
  );
}

export function PropertyPostImageInterceptor(){
  return UseInterceptors(FileInterceptor('postImage', {
      storage: diskStorage({
        destination: './uploads/properties/posts/images',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
}

export function PropertyImageInterceptor() {
  return UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/properties/images',
        filename: (req, file, cb) => {
        const timestamp = Date.now();
        const ext = extname(file.originalname);
        const safeBaseName = file.originalname
          .replace(/\s+/g, '-')        // replace spaces with dashes
          .replace(/\.[^/.]+$/, '')    // remove original extension
          .replace(/[^a-zA-Z0-9-_]/g, ''); // remove unsafe characters

        const filename = `property-invoice-${safeBaseName}-${timestamp}${ext}`;
        cb(null, filename);
      },
      }),
    }),
  );
}


export function UserPropertyInvoiceImageInterceptor() {
  return UseInterceptors(
    FileInterceptor('document', {
      storage: diskStorage({
        destination: './uploads/properties/users/invoices/images',
        filename: (req, file, cb) => {
        const propertyId = req.body.propertyId;
        const timestamp = Date.now();
        const ext = extname(file.originalname);
        const safeBaseName = file.originalname
          .replace(/\s+/g, '-')        // replace spaces with dashes
          .replace(/\.[^/.]+$/, '')    // remove original extension
          .replace(/[^a-zA-Z0-9-_]/g, ''); // remove unsafe characters

        const filename = `property-${propertyId}-${safeBaseName}-${timestamp}${ext}`;
        cb(null, filename);
      },
      }),
    }),
  );
}