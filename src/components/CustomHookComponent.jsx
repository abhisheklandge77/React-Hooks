import { useEffect, useState, useMemo } from "react";

function useFetchData(url) {
    const [ data, setData ] = useState(null);
    const [ done, setDone ] = useState(false);

    useEffect(() => {
        const timer = window.setInterval(() => {
            fetch(url)
            .then(res => res.json())
            .then(d => {
                setData(d);
                setDone(true);
            });
        }, 5000);
        return () => window.clearInterval(timer);
      },[url]);

      return {
          data,
          done
      }
};

function CustomHookComponent() {

        const { data, done } = useFetchData('https://dog.ceo/api/breeds/image/random');
        const response = useMemo(() => (
            data?.status.includes('success')
        ), [data]);
        console.log("response: ",done);
    return(
        <div>
            {
                response && <div style={{width: "450px", height: "400px", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img style={{width: "100%", height: "100%"}} src={data.message} alt="dog"/>
                </div>
            }
        </div>
    );
};

export default CustomHookComponent;