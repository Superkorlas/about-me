const PROD_BASE_URL = 'https://Superkorlas.github.io/about-me/';

export function resolvePublicAsset(path: string): string {
    if (!path.startsWith('/')) return path;
    const filename = path.slice(1);
    return import.meta.env.DEV
        ? `${import.meta.env.BASE_URL}${filename}`
        : `${PROD_BASE_URL}${filename}`;
}
