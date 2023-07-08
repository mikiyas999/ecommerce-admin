import prismadb from "@/lib/prismadb";
import BillboardForm from "./components/billboard-form";

const BillboardCreate = async ({
  params,
}: {
  params: { billboardsId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardsId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm intialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardCreate;
