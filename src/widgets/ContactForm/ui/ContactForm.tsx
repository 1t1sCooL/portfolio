"use client";
import { useForm } from "react-hook-form";
import { FadeIn } from "@/shared/lib/framer";
import { Button } from "@/shared/ui/Button";
import styles from "./ContactForm.module.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Данные формы:", data);
    alert(
      "Сообщение отправлено! (Здесь можно подключить API Telegram или Email)"
    );
  };

  return (
    <section className={styles.section} id="contact">
      <FadeIn>
        <div className={styles.container}>
          <div className={styles.info}>
            <h2>Связаться со мной</h2>
            <p>
              Есть проект или предложение? Пишите, я открыт к сотрудничеству!
            </p>
            <div className={styles.contacts}>
              <span>Email: mmalabugin@gmail.com</span>
              <span>TG: @ItIsCooL</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.field}>
              <input
                {...register("name", { required: true })}
                placeholder="Ваше имя"
              />
              {errors.name && (
                <span className={styles.error}>Обязательное поле</span>
              )}
            </div>

            <div className={styles.field}>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email"
              />
              {errors.email && (
                <span className={styles.error}>Введите корректный email</span>
              )}
            </div>

            <div className={styles.field}>
              <textarea
                {...register("message", { required: true })}
                placeholder="Ваше сообщение"
                rows={5}
              />
            </div>

            <Button variant="primary">Отправить сообщение</Button>
          </form>
        </div>
      </FadeIn>
    </section>
  );
};
