import { useEffect, useState } from "react";


const useServiceDetails = servicesId => {
  
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${servicesId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
            

    }, [servicesId])


return [service,setService];
}
export default useServiceDetails;
