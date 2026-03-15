


exports.joblisting = async (req, res) => {
    const JobsApi = "https://webscrapping-backend-2.onrender.com/jobs?query=python&location=kerala"
    // const JobsApi = "https://dummyjson.com/products"
    console.log("job listing");

    try {
        console.log("jiijij");
        
        const response = await fetch(JobsApi)
        console.log("response is getting",response.json);
        
        const data = await response.json()  
        console.log("controler data",data)
 
        res.json(data)
    } catch (error) {
        console.log("joblisting data error", error);
    }
}

