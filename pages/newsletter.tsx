import React from "react";
import * as Yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Image from "@src/components/Image/Image";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { BaseComponent } from "@src/theme/BaseComponent";

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('Campo obrigatório'),
})

 export default function NewsletterScreen () {
  const theme = useTheme();
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    }
  });

  const { errors } = formState;

  const handleSubmitData = (data: any) => {
    fetch("/api/newsletter/optin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(async(res) => {
      console.log(await res.json());
    })
  }

  return (
    <Box
      styleSheet={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <Box
          styleSheet={{
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Image
            src="https://github.com/ThiagoMoura963.png"
            alt="Foto do Thiago Moura"
            styleSheet={{
              width: '150px',
              borderRadius: '50%'
            }}
          />
          <Text variant="heading2" styleSheet={{ marginBottom: '1rem' }}>
            Thiago Moura
          </Text>
          <NewsLetterTextField
            name="email"
            {...register("email")}
            placeholder="Digite seu e-mail..."
          />
          {errors.email &&
            <Text
              variant="body3"
              styleSheet={{
                paddingTop: '.25rem',
                color: theme.colors.negative.x400,
                fontWeight: 600
              }}
            >
              {errors.email.message}
            </Text>}
          <Button fullWidth styleSheet={{ marginTop: '1rem', width: '100%' }}>
            Cadastrar
          </Button>
        </Box>
      </form>
    </Box>

  )
}

interface NewsLetterTextFieldProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  values?: string;
  ref: any;
}

const NewsLetterTextField = React.forwardRef<HTMLInputElement, NewsLetterTextFieldProps>((
  props: NewsLetterTextFieldProps, ref
  ) => {
  return (
    <Box
      styleSheet={{
        width: '100%'
      }}
    >
      <BaseComponent
        as="input"
        ref={ref}
        styleSheet={{
          border: '1px solid rgb(195, 195, 195)',
          borderRadius: '10px',
          padding: '.75rem',
          wdith: '100%',
        }}
        {...props}
      />
    </Box>
  )
})