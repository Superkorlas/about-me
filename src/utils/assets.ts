export function resolvePublicAsset(path: string): string {
    if (!path.startsWith('/')) return path;
    const filename = path.slice(1);
    const base = import.meta.env.BASE_URL;
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;
    return `${normalizedBase}${filename}`;
}
