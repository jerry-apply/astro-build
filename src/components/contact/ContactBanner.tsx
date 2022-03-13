import * as React from 'react';
import { LanguageContext } from '../context/LanguageContext'

export interface ContactBannerProps {}

const ContactBanner: React.FC<ContactBannerProps> = (
  props
) => {
  const { language } = React.useContext(LanguageContext);
  return (
    <div>
      contact banner goes here
    </div>
  );
}

export default ContactBanner;
