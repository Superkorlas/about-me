export function resolvePublicAsset(path: string): string {
    if (!path.startsWith('/')) return path;
    const filename = path.slice(1);
    return import.meta.env.DEV
        ? `${import.meta.env.BASE_URL}${filename}`
        : `https://Superkorlas.github.io/about-me/${filename}`;
}
