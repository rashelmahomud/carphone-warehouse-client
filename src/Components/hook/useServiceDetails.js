import { useEffect, useState } from "react";


const useServiceDetails = servicesId => {
  
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://arcane-sierra-49316.herokuapp.com/service/${servicesId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
            

    }, [servicesId])


return [service,setService];
}
export default useServiceDetails;
