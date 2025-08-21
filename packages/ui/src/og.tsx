import { ImageResponse } from 'next/og';
import type { ReactElement, ReactNode } from 'react';
import type { ImageResponseOptions } from 'next/dist/compiled/@vercel/og/types';

interface GenerateProps {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  primaryColor?: string;
  primaryTextColor?: string;
  site?: ReactNode;
}

export function generateOGImage(
  options: GenerateProps & ImageResponseOptions,
): ImageResponse {
  const {
    title,
    description,
    icon,
    site,
    primaryColor,
    primaryTextColor,
    ...rest
  } = options;

  return new ImageResponse(
    generate({
      title,
      description,
      icon,
      site,
      primaryTextColor,
      primaryColor,
    }),
    {
      width: 1200,
      height: 630,
      ...rest,
    },
  );
}

export function generate({
  primaryColor = 'rgba(255,150,255,0.3)',
  primaryTextColor = 'rgb(255,150,255)',
  ...props
}: GenerateProps): ReactElement {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        color: 'white',
        padding: '4rem',
        backgroundColor: '#0c0c0c',
        backgroundImage: `linear-gradient(to top right, ${primaryColor}, transparent)`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '12px',
          color: primaryTextColor,
        }}
      >
        {props.icon}
        <p
          style={{
            fontSize: '56px',
            fontWeight: 600,
          }}
        >
          {props.site}
        </p>
      </div>

      <p
        style={{
          fontWeight: 800,
          fontSize: '82px',
        }}
      >
        {props.title}
      </p>
      <p
        style={{
          fontSize: '52px',
          color: 'rgba(240,240,240,0.8)',
        }}
      >
        {props.description}
      </p>
    </div>
  );
}
