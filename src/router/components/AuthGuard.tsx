import { Suspense } from 'react';

import { useRouter } from '@/hooks/useRouter';
import userStore from '@/stores/userStore';

type Props = {
  children: React.ReactNode;
};
export default function AuthGuard({ children }: Props) {
  const router = useRouter();
  const { accessToken } = userStore();

  const check = useCallback(() => {
    if (!accessToken) {
      router.replace('/login');
    }
  }, [router, accessToken]);

  useEffect(() => {
    check();
  }, [check]);

  return <Suspense>{children}</Suspense>;
  // return <ErrorBoundary FallbackComponent={PageError}>{children}</ErrorBoundary>;
}
