"use client";

import { useEffect, useState } from 'react';

interface ClientOnlyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ClientOnlyWrapper = ({ children, fallback }: ClientOnlyWrapperProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback ? <>{fallback}</> : null;
  }

  return <>{children}</>;
};

export default ClientOnlyWrapper;
