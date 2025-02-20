export async function generateStaticParams() {
  const slugs = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return slugs.map(({ id }) => ({ id: id.toString() }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
