// import { RequestHandler } from "next/dist/server/next";
// import PlacesDao from "../model/places.model";

// const getAllPlaces: RequestHandler = async (req, res) => {

//     try {
//         const Places = await PlacesDao.find();
//         return res.json({message:"places fetched succesfully!",status:true,data:Places});
//     } catch (error) {
//         return res.status().json({message:"unable to fetch places!",status:false,error:error.message});
//     }

// }
// export { getAllPlaces };
