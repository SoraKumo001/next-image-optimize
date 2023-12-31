import Image from "next/image";

const Page = () => {
  const images = ["test01.png", "test02.jpg", "test03.avif"];
  return (
    <>
      {images.map((image) => (
        <Image
          key={image}
          width={200}
          height={200}
          src={`https://raw.githubusercontent.com/SoraKumo001/cloudflare-workers-image-optimization/master/images/${image}`}
          alt=""
        />
      ))}
    </>
  );
};

export default Page;
