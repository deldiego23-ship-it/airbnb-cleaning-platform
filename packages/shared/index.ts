export type Role = 'OWNER' | 'HOSTER' | 'WORKER' | 'ADMIN';
export type WorkerMode = 'CLEANER' | 'MOTOBOY';

export interface UserDTO {
  id: string;
  email: string;
  role: Role;
  mode?: WorkerMode;
}

export interface OrderUpdate {
  status: string;
  lat: number;
  lng: number;
  bagId?: string;
  orderToken?: string;
}

export interface ChatMessage {
  orderId: string;
  content: string;
  senderId: string;
}
