import React from 'react';
import styled from "styled-components";
import {Row} from "../../../../styles/Flex";
import Car from "../../../../models/car.model";
import {ThemeInnerModel} from "../../../../models/theme.model";
import {LightText} from "../../../../styles/Typography";
import {ImageDefault} from "../../../../styles/Image";
import SimpleColumn from "../../../../components/SimpleColumn";

const CarDescription: React.FC<Car> = ({image, name, modelName,  mileage,
                                           modelYear, fuelType, transmissionType}) => {
    return (
        <CarDescriptionContainer>
            <Imagem src={image} />
            <SimpleColumn>
                <CarName>{name}</CarName>
                <CarDescriptionText>{modelName}</CarDescriptionText>
                <CarDescriptionTextWithMargin>{`${modelYear} - ${fuelType}`}</CarDescriptionTextWithMargin>
                <CarDescriptionText>{`${transmissionType} - ${mileage}KM`}</CarDescriptionText>
            </SimpleColumn>
        </CarDescriptionContainer>
    );
};

export default CarDescription;

const CarDescriptionContainer = styled.div`
${Row};
padding: 0 55px 0 20px;
`

const Imagem = styled.img`
width: 80px;
height: 60px;
margin-right: 10px;
${ImageDefault};
`

const CarName = styled.span`
font-family: 'Inter', sans-serif;
font-size: 12px;
font-weight: bold;
line-height: 1.33;
color: ${({theme}: ThemeInnerModel) => theme.text.darkColor};
margin-bottom: 4px;
text-transform: uppercase;
`

const CarDescriptionText = styled.span`
font-size: 10px;
${LightText};
text-transform: uppercase;
`

const CarDescriptionTextWithMargin = styled(CarDescriptionText)`
margin: 5px 0;
`