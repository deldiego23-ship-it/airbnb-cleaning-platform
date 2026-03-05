'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export default function RoleGuard({ children, allowedRoles }: RoleGuardProps) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      router.push('/login');
      return;
    }

    const user = JSON.parse(userStr);
    if (!allowedRoles.includes(user.role)) {
      router.push('/');
      return;
    }

    setAuthorized(true);
  }, [allowedRoles, router]);

  if (!authorized) return <div className="p-8 text-center font-bold italic">AUTHORIZING...</div>;

  return <>{children}</>;
}
