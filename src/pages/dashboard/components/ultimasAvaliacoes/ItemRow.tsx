import React from 'react';
import Divider from "../../../../components/Divider";
import CarDescription from "./CarDescription";
import CarValue from "./CarValue";
import Car from "../../../../models/car.model";
import ItemGrid from "./ItemGrid";
import CarStatus from "./CarStatus";


const ItemRow: React.FC<{ car: Car, isLastChild: boolean }> = ({car, isLastChild}) => {
    return (
        <div>
            <ItemGrid>
                <CarDescription {...car} />
                <CarValue {...car} />
                <CarStatus />
            </ItemGrid>
            <Divider noMarginLastChild={isLastChild} />
        </div>
    );
};

export default ItemRow;

