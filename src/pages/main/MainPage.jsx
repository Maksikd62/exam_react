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
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";

const MainPage = () => {
  const cars = useSelector((state) => state.carsMainPageReducer.cars);
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
            <Card
              key={car.id}
              onClick={() => handleCarClick(car)}
              style={{ margin: "10px" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
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
                      image={selectedCar.photos[0]}
                      alt={`${selectedCar.brand} ${selectedCar.model}`}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CardMedia
                      component="img"
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
