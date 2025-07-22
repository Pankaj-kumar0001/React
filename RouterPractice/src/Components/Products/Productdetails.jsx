
import { Outlet, useParams } from 'react-router-dom'

function Productdetails() {
    const param = useParams();
    console.log(param);
    
    return (
        <div>
            Product details = {param.id}
           
        </div>
    );
}

export default Productdetails;
