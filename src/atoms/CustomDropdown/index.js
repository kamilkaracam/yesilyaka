import React, {useEffect, useState} from "react";

//import npm packages
import {Dropdown} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {Field, Form, Formik, ErrorMessage} from "formik";
import InputMask from 'react-input-mask';
import {useForm,Controller} from 'react-hook-form';
import * as Yup from 'yup';

//import styles
import "./customdropdown.scss";

const defaultValues = {
    reactMaskInput: ""
}

const CustomDropdown = () => {
    const {control} = useForm({defaultValues})
    const [show,setShow] = useState(false)

    return(
        <Dropdown className="infoForm" show={show}>
            <DropdownToggle
                className="infoButton btn-dark"
                data-aos={'zoom-in'}
                data-aos-duration={'1300'}
                onClick={()=> setShow(true)}
               >
                BİLGİ TALEP FORMU
            </DropdownToggle>
            <DropdownMenu className="infoMenu">
                <Dropdown.Header>
                    <p onClick={()=> setShow(false)} style={{cursor:'pointer'}}>X</p>
                </Dropdown.Header>
                <Formik
                    initialValues={{
                        name:'',
                        lastName:'',
                        phone:'',
                        email:'',
                        message:'',
                        secureData:'',
                        confirmation:''
                    }}

                    validationSchema={Yup.object({
                        name: Yup.string()
                            .min(1, 'Lütfen isminizi giriniz..')
                            .required('zorunlu alan'),
                        lastName: Yup.string()
                            .max(20, 'Lütfen soyisminizi giriniz..')
                            .required('zorunlu alan'),
                        email: Yup.string().email('Geçersiz mail adresi').required('zorunlu alan'),
                        phone: Yup.string()
                            .max(11,'telefon numaranızı başında 0 olmadan giriniz..')
                            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Geçersiz telefon numarası')
                            .required('zorunlu alan'),
                        message: Yup.string()
                            .required('zorunlu alan')

                    })}

                    onSubmit={(values, { setSubmitting }) => {
                        console.log('GrayCat coming..')
                    }}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">
                                Adınız
                                <Field name="name" type="text"/>
                                <ErrorMessage name="name" component={'span'} />
                            </label>
                            <label htmlFor="lastName">
                                Soyadınız
                                <Field name="lastName" type="text"/>
                                <ErrorMessage name="lastName" component={'span'} />
                            </label>
                            <label htmlFor="phone">
                                Telefon Numaranız
                                <Controller
                                  name="reactMaskInput"
                                  control={control}
                                  render={({ field: { onChange, value } }) => (
                                    <InputMask mask="(999)9999999" value={value} onChange={onChange}>
                                        {(inputProps) => (
                                          <input
                                            {...inputProps}
                                            type="tel"
                                            className="input"
                                            disableUnderline
                                          />
                                        )}
                                    </InputMask>
                                  )}
                                />
                                <ErrorMessage name="phone" component={'span'}/>
                            </label>
                            <label htmlFor="email">
                                E Posta Adresiniz
                                <Field name="email" type="email"/>
                                <ErrorMessage name="email" component={'span'} />
                            </label>
                            <label htmlFor="message">
                                Mesajınız
                                <Field as="textarea" row="1" name="message" type="text"/>
                                <ErrorMessage name="message" component={'span'} />
                            </label>
                            <label className="checkbox" htmlFor="secureData">
                                <Field type="checkbox" name="secureData"/>
                                Kişisel Verilerin Korunması Kanunu uyarınca, aydınlatma metnini
                                okuduğumu veanladığımı kabul ediyorum.
                            </label>
                            <label className="checkbox" htmlFor="confirmation">
                                <Field type="checkbox" name="confirmation"/>
                                Mesa Nurol Adi Ortaklığı’nı oluşturan, Mesa Mesken Sanayi A.Ş. ve Nurol İnşaat ve Ticaret A.Ş. tarafından tanıtım, teklif, promosyon, anket, etkinlik gibi her türlü doğrudan ve dolaylı pazarlama faaliyetleri kapsamında tarafıma elektronik posta, telefon ve benzeri iletişim kanalları vasıtasıyla ses ve görüntü içerikli bilgilendirme ve pazarlama iletileri gönderilmesine, kişisel verilerimin bu amaçla işlenmesine ve gönderim sağlanması için hizmet aldığınız üçüncü kişilerle paylaşılmasına onay veriyorum.
                            </label>
                            <button type="submit" className="submitButton">GÖNDER</button>
                        </div>
                    </Form>
                </Formik>
            </DropdownMenu>
        </Dropdown>
    )
}

export default CustomDropdown;