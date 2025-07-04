import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Items() {

  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {

    if (!slug) return;

    import(`@/data/${slug}.json`)

      .then((module) => setData(module.default))
      .catch(() => setData(null));

  }, [slug]);

  if (!data) return <div className="h-screen w-screen backdrop-blur-xs backdrop-brightness-50"> Loading... </div>;

  return (

    <div className="h-screen w-screen backdrop-blur-xs backdrop-brightness-50">

      <h1>Page for items: {slug}</h1>
    
    </div>
  );
}
