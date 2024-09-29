const Layout = (props: any) => {
  return (
    <main className="h-screen flex">
      <div className="max-w-sm m-auto">{props.children}</div>
    </main>
  );
};

export default Layout;
