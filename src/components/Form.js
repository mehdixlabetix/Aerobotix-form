import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

import { motion } from "framer-motion";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const Form = () => {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    submit(data);
  };
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        reset();
      }
    }
  }, [response]);

  return (
    <div>
      <Card borderRadius="md" id="cardapp" alignItems="center">
        <motion.div className="form-group">
          <center>
            <form onSubmit={handleSubmit(onSubmit)} className="form" id="f">
              <VStack spacing={7}>
                <FormControl variant="floating">
                  <Input
                    whileFocus={{ scale: 1.2 }}
                    placeholder=""
                    className="firstInput"
                    {...register("prenom")}
                  />
                  <FormLabel id="label">Prénom :</FormLabel>
                </FormControl>
                <FormControl variant="floating">
                  <Input
                    whileFocus={{ scale: 1.2 }}
                    placeholder=""
                    className="input"
                    {...register("nom", {
                      required: "Please enter your last name",
                    })}
                  />
                  <FormLabel id="label">Nom :</FormLabel>
                  {errors.nom && <span> {errors.nom.message}</span>}
                </FormControl>

                <FormControl variant="floating">
                  <Input
                    placeholder=""
                    className="input"
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Email invalide",
                      },
                    })}
                  />
                  <FormLabel id="label">Email :</FormLabel>
                  {errors.email && <span>{errors.email.message}</span>}
                </FormControl>
                <FormControl variant="floating">
                  <Input
                    whileFocus={{ scale: 1.2 }}
                    placeholder=""
                    className="input"
                    {...register("phone", {
                      required: "Please enter your phone number",
                      pattern: {
                        value: /^[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  <FormLabel id="label">Numéro de téléphone :</FormLabel>
                  {errors.phone && <span>{errors.phone.message}</span>}
                </FormControl>
                <FormControl variant="floating">
                  <Input
                    whileFocus={{ scale: 1.2 }}
                    placeholder=""
                    {...register("fb", {
                      required: "Please enter your facebook",
                      pattern: {
                        value:
                          /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/,
                        message: "invalid facebook link",
                      },
                    })}
                  />
                  <FormLabel id="label">Lien Facebook:</FormLabel>
                  {errors.fb && <span>{errors.fb.message}</span>}
                </FormControl>
                <HStack spacing={28}>
                  <Box>
                    <FormLabel id="label">Niveau:</FormLabel>
                    <Select
                      whileFocus={{ scale: 1.2 }}
                      defaultValue="1"
                      className="input"
                      {...register("niveau")}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Select>
                  </Box>
                  <Box>
                    <FormLabel id="label"> Filière :</FormLabel>
                    <Select
                      whileFocus={{ scale: 1.2 }}
                      defaultValue="MPI"
                      className="input"
                      {...register("filiere")}
                    >
                      <option value="GL">GL</option>
                      <option value="MPI">MPI</option>
                      <option value="CBA">CBA</option>
                      <option value="RT">RT</option>
                      <option value="IIA">IIA</option>
                      <option value="IMI">IMI</option>
                      <option value="CH">CH</option>
                      <option value="BIO">BIO</option>
                    </Select>
                  </Box>
                </HStack>
                <FormControl>
                  <FormLabel id="label"> Projet :</FormLabel>
                  <Select
                    whileFocus={{ scale: 1.2 }}
                    defaultValue="voltmetre"
                    style={{ fontSize: "18px" }}
                    className="input"
                    {...register("formation")}
                  >
                    <option style={{ color: "black" }} value="arduino">
                      Piano digital
                    </option>
                    <option style={{ color: "black" }} value="voltmetre">
                      Voltmètre
                    </option>
                    <option style={{ color: "black" }} value="bras">
                      Bras robotique (2 axes)
                    </option>
                    <option style={{ color: "black" }} value="manette">
                      Manette
                    </option>
                    <option style={{ color: "black" }} value="autre">
                      Creative day (proposez votre idée de projet pour décorer le local d'Aerobotix)
                    </option>
                  </Select>
                </FormControl>
                <FormControl variant="floating">
                  <Input
                    whileFocus={{ scale: 1.2 }}
                    placeholder=""
                    className="input"
                    {...register("idee")}
                  />
                  <FormLabel id="label">
                    Votre idée si vous avez choisi l'option Creative day :
                  </FormLabel>
                </FormControl>
                <span style={{color:"red"}}>NB: Pour chaque projet il y aura 2 équipes de 5 personnes</span>
                <Button
                  isLoading={isLoading}
                  marginTop="10px"
                  type="submit"
                  colorScheme="red"
                  width="200px"
                >
                  Submit
                </Button>
              </VStack>
            </form>
          </center>
        </motion.div>
      </Card>
      {response && response.type == "success" && (
        <Alert
          marginTop="10px"
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          borderRadius="20px"
          height="150px"
          width="550px"
          marginBottom="50px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for submitting. We look forward to have you joining us.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};
export default Form;
