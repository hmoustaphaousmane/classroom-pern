interface CloudinaryWidget {
    open(): void;
    close(): void;
    destroy(): void;
}

interface CloudinaryUploadWidgetResult {
    event: string;
    info: {
        secure_url: string;
        public_id: string;
        delete_token?: string;
    };
}

interface UploadPayload {
    url: string;
    publicId: string;
}

declare global {
    interface Window {
        cloudinary?: {
            createUploadWidget(
                options: Record<string, unknown>,
                callback: (
                    error: unknown,
                    result: CloudinaryUploadWidgetResult
                ) => void
            ): CloudinaryWidget;
        };
    }
}

export {};