import * as Location from "expo-location"
import { useEffect, useState } from "react";


export default function useLocation() {
    const [location, setLocation] = useState();

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestBackgroundPermissionsAsync();
            if (!granted) return;
            const last = await Location.getLastKnownPositionAsync();
            if (last) setLocation(last);
            else {
                const current = await Location.getCurrentPositionAsync();
                setLocation(current);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return location


}