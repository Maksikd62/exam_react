import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Box,
  Paper,
  Divider,
  Pagination,
} from "@mui/material";

const cars = [
  {
    id: 1,
    photos: [
      "https://ireland.apollo.olxcdn.com/v1/files/bg0wzju6uc3x1-UA/image;s=1000x700",
      "https://ireland.apollo.olxcdn.com/v1/files/d2qvny4thsfb3-UA/image;s=1000x700",
    ],
    brand: "Audi",
    model: "Q7",
    modification: "S-line Quattro",
    customsCleared: "Так",
    mileage: "156 тис.км.",
    price: "67 999$",
    engineVolume: "3 л.",
    fuelConsumption: "6 л/100км",
    year: "2020",
    fuelType: "Дизель",
    transmission: "Типтронік",
    color: "Білий",
    bodyType: "Позашляховик/Кроссовер",
    driveType: "Повний",
    numberSeats: "7",
    technicalCondition:
      "Гаражне зберігання, Не фарбована, Не бита, Сервісна книжка, Перший власник",
    comfort:
      "Шкіряний салон, Бортовий комп'ютер, Парктроник, Тонування скла, Електросклопiдйомники, Клiмат контроль, Омивач фар, Кондиціонер, Датчик світла, Запуск кнопкою, Підсилювач керма, Обігрів керма, Ел. регулювання сидінь, Мультируль, Підігрів дзеркал, Передня камера, Електропакет, Круїз контроль, Підігрів сидінь, Датчик дощу, Пам'ять сидінь",
    multimedia:
      "Акустика, AUX, Система навігації GPS, Сабвуфер, Підсилювач, Android Auto, Магнітола, Bluetooth, USB",
    security:
      "Лазерні фари, Безключовий доступ, Сигналізація, Пневмопідвіска, Сервокермо, ESP, ABS, Денні ходові вогні, ABD, Центральний замок, Іммобілайзер, LED фари, Подушка безпеки (Airbag), GPS трекер",
    description:
      "Німецький преміальний 7-містний позашляховик в S-line. Двигун 3.0 літра дизель-електро, повний привід Quattro. Авто в ідеалі по зовнішньому, внутрішньому та технічному стані. Пробіг рідний, жодна деталь не фарбована. Колір білий перламутр. Пройшла повне обслуговування на офіційній станції, жодних вкладень не потребує. До авто віддам 2 комплекти нових дисків 21 радіусу з резиною.",
    location: "Ужгород",
    datePublication: "25 липня 2024р.",
  },
  {
    id: 2,
    photos: ["", ""],
    brand: "",
    model: "",
    modification: "",
    customsCleared: "",
    mileage: "",
    price: "",
    engineVolume: "",
    fuelConsumption: "",
    year: "",
    fuelType: "",
    transmission: "",
    color: "",
    bodyType: "",
    driveType: "",
    numberSeats: "",
    technicalCondition: "",
    comfort: "",
    multimedia: "",
    security: "",
    description: "",
    location: "",
    datePublication: "",
  },
  {
    id: 3,
    photos: ["", ""],
    brand: "",
    model: "",
    modification: "",
    customsCleared: "",
    mileage: "",
    price: "",
    engineVolume: "",
    fuelConsumption: "",
    year: "",
    fuelType: "",
    transmission: "",
    color: "",
    bodyType: "",
    driveType: "",
    numberSeats: "",
    technicalCondition: "",
    comfort: "",
    multimedia: "",
    security: "",
    description: "",
    location: "",
  },
  {
    id: 4,
    photos: ["", ""],
    brand: "",
    model: "",
    modification: "",
    customsCleared: "",
    mileage: "",
    price: "",
    engineVolume: "",
    fuelConsumption: "",
    year: "",
    fuelType: "",
    transmission: "",
    color: "",
    bodyType: "",
    driveType: "",
    numberSeats: "",
    technicalCondition: "",
    comfort: "",
    multimedia: "",
    security: "",
    description: "",
    location: "",
  },
  {
    id: 5,
    photos: ["", ""],
    brand: "",
    model: "",
    modification: "",
    customsCleared: "",
    mileage: "",
    price: "",
    engineVolume: "",
    fuelConsumption: "",
    year: "",
    fuelType: "",
    transmission: "",
    color: "",
    bodyType: "",
    driveType: "",
    numberSeats: "",
    technicalCondition: "",
    comfort: "",
    multimedia: "",
    security: "",
    description: "",
    location: "",
  },
  {
    id: 6,
    photos: ["", ""],
    brand: "",
    model: "",
    modification: "",
    customsCleared: "",
    mileage: "",
    price: "",
    engineVolume: "",
    fuelConsumption: "",
    year: "",
    fuelType: "",
    transmission: "",
    color: "",
    bodyType: "",
    driveType: "",
    numberSeats: "",
    technicalCondition: "",
    comfort: "",
    multimedia: "",
    security: "",
    description: "",
    location: "",
  },
  {
    id: 7,
    photos: ["", ""],
    brand: "",
    model: "",
    modification: "",
    customsCleared: "",
    mileage: "",
    price: "",
    engineVolume: "",
    fuelConsumption: "",
    year: "",
    fuelType: "",
    transmission: "",
    color: "",
    bodyType: "",
    driveType: "",
    numberSeats: "",
    technicalCondition: "",
    comfort: "",
    multimedia: "",
    security: "",
    description: "",
    location: "",
  },
  {
    id: 8,
    photos: ["", ""],
    brand: "",
    model: "",
    modification: "",
    customsCleared: "",
    mileage: "",
    price: "",
    engineVolume: "",
    fuelConsumption: "",
    year: "",
    fuelType: "",
    transmission: "",
    color: "",
    bodyType: "",
    driveType: "",
    numberSeats: "",
    technicalCondition: "",
    comfort: "",
    multimedia: "",
    security: "",
    description: "",
    location: "",
  },
  {
    id: 9,
    photos: ["", ""],
    brand: "",
    model: "",
    modification: "",
    customsCleared: "",
    mileage: "",
    price: "",
    engineVolume: "",
    fuelConsumption: "",
    year: "",
    fuelType: "",
    transmission: "",
    color: "",
    bodyType: "",
    driveType: "",
    numberSeats: "",
    technicalCondition: "",
    comfort: "",
    multimedia: "",
    security: "",
    description: "",
    location: "",
  },
  {
    id: 10,
    photos: ["", ""],
    brand: "",
    model: "",
    modification: "",
    customsCleared: "",
    mileage: "",
    price: "",
    engineVolume: "",
    fuelConsumption: "",
    year: "",
    fuelType: "",
    transmission: "",
    color: "",
    bodyType: "",
    driveType: "",
    numberSeats: "",
    technicalCondition: "",
    comfort: "",
    multimedia: "",
    security: "",
    description: "",
    location: "",
  },
  {
    id: 11,
    photos: ["", ""],
    brand: "",
    model: "",
    modification: "",
    customsCleared: "",
    mileage: "",
    price: "",
    engineVolume: "",
    fuelConsumption: "",
    year: "",
    fuelType: "",
    transmission: "",
    color: "",
    bodyType: "",
    driveType: "",
    numberSeats: "",
    technicalCondition: "",
    comfort: "",
    multimedia: "",
    security: "",
    description: "",
    location: "",
  },
];

const MainPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const pageChangeHandler = (event, value) => {
    setSelectedCar(null);
    setCurrentPage(value);
  };

  const pageCount = Math.ceil(cars.length / carsPerPage);
  const displayedCars = cars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          {displayedCars.map((car) => (
            <Card key={car.id} onClick={() => handleCarClick(car)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={car.photos[0]}
                  alt={`${car.brand} ${car.model}`}
                />
                <CardContent>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h5" component="div">
                        {car.brand} {car.model} {car.year}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" color="text.primary">
                        {car.price}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" color="text.secondary">
                    {car.location} - {car.datePublication}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.mileage}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
        <Grid item xs={7}>
          {selectedCar && (
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={selectedCar.photos[0]}
                      alt={`${selectedCar.brand} ${selectedCar.model}`}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={selectedCar.photos[1]}
                      alt={`${selectedCar.brand} ${selectedCar.model}`}
                    />
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography
                        variant="h5"
                        component="div"
                        fontWeight="bold"
                      >
                        {selectedCar.brand} {selectedCar.model}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        color="text.primary"
                        fontWeight="bold"
                      >
                        {selectedCar.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box mt={2}>
                  <Grid container spacing={2}>
                    {[
                      { label: "Модифікація", value: selectedCar.modification },
                      { label: "Рік", value: selectedCar.year },
                      {
                        label: "Розмитнена",
                        value: selectedCar.customsCleared,
                      },
                      { label: "Пробіг", value: selectedCar.mileage },
                      { label: "Вид палива", value: selectedCar.fuelType },
                      {
                        label: "Об'єм двигуна",
                        value: selectedCar.engineVolume,
                      },
                      { label: "Тип кузова", value: selectedCar.bodyType },
                      {
                        label: "Коробка передач",
                        value: selectedCar.transmission,
                      },
                      { label: "Тип приводу", value: selectedCar.driveType },
                      {
                        label: "Витрата палива",
                        value: selectedCar.fuelConsumption,
                      },
                      {
                        label: "Кількість місць",
                        value: selectedCar.numberSeats,
                      },
                      { label: "Колір", value: selectedCar.color },
                    ].map((item, index) => (
                      <Grid item xs={6} key={index}>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            {item.label}: {item.value}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box mt={2}>
                  {[
                    {
                      label: "Технічний стан",
                      value: selectedCar.technicalCondition,
                    },
                    { label: "Комфорт", value: selectedCar.comfort },
                    { label: "Мультимедіа", value: selectedCar.multimedia },
                    { label: "Безпека", value: selectedCar.security },
                  ].map((item, index) => (
                    <Paper variant="outlined" key={index} sx={{ p: 1, mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {item.label}: {item.value}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
                <Divider />
                <Box mt={2}>
                  <Typography variant="h6" component="div" fontWeight="bold">
                    Опис
                  </Typography>
                  <Typography variant="body1">
                    {selectedCar.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          )}
        </Grid>
        <Grid item xs={12} sx={{ display: "flex" }}>
          <Pagination
            page={currentPage}
            onChange={pageChangeHandler}
            sx={{ m: "auto" }}
            count={pageCount}
            color="primary"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
