import { db } from "@/app/_lib/prisma";

interface BarbershopDetailsPageProps{
    params: {
        id?: string;
    };
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {

    if(!params.id){

        return null;
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
    })

    return ( 
        <h1>{params.id}</h1>
     );
}
 
export default BarbershopDetailsPage;