import React, {SyntheticEvent, useState} from "react";
import './Form.css';
import {Button} from "../Button/Button";


export const Form = () => {
    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState(0);

    const [packageToGet, setPackageToGet] = useState({
        code: 0,
        phone: 0,
    });

    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();

        console.log(packageToGet);

        setLoading(true);

        try {
            const res = await fetch(`http://localhost:3001/packages/${packageToGet.code}`, {
                method: 'DELETE',
            });

            if ([400, 500].includes(res.status)) {
                const error = await res.json();
                alert(`Error occurred: ${error.message}`);
                return;
            }
            // if ([200, 300].includes(res.status)) {
            //     return (
            //         <div className="thank-you-info">
            //             <h2>Thank you, your parcel: {packageToGet.code} has been received</h2>
            //             <Button to="/form" text="Pick up another one"/>
            //             <Button to="/" text="That's it for today"/>
            //         </div>
            //     )
            // }


        } finally {
            setLoading(false);
        }

    }

    const updatePackage = (key: string, value: any) => {
        setPackageToGet(packageToGet => ({
            ...packageToGet,
            [key]: value,
        }));
    };


    if (loading) {
        return <h2>Loading...</h2>
    }



    return (
        <form onSubmit={sendForm} action="" className="form" >
            <h2>Get your package</h2>
            <p>
                <label>
                    Phone: <br/>
                    <input
                        type="tel"
                        name="phone"
                        value={packageToGet.phone}
                        required
                        maxLength={9}
                        minLength={9}
                        onChange={e => updatePackage('phone', Number(e.target.value))}
                    />
                </label>
            </p>
            <p>
                <label>
                    Code: <br/>
                    <input
                        type="text"
                        name="code"
                        value={packageToGet.code}
                        required
                        maxLength={4}
                        minLength={4}
                        onChange={e => updatePackage('code', Number(e.target.value))}
                    />
                </label>
            </p>

            <button type="submit" className="sub-button">Pick up your package!</button>
        </form>

    )

}
