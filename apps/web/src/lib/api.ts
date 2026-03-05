export const API_URL = '/api';

export async function fetcher(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!res.ok) throw new Error('API Error');
  return res.json();
}

export const ordersApi = {
  validateScan: (data: any) => fetcher('/orders/validate-scan', { method: 'POST', body: JSON.stringify(data) }),
  deliver: (data: any) => fetcher('/orders/deliver', { method: 'POST', body: JSON.stringify(data) }),
  getClusters: (lat: number, lng: number) => fetcher(`/orders/clusters?lat=${lat}&lng=${lng}`),
};
