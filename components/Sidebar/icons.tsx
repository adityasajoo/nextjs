
/**
 * Created using : https://react-svgr.com/playground/
 * Couldn't find a way to change svg color
 */
export interface Props {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  hovered: boolean;
  active: boolean;
}

export const DashboardIcon = (props: Props) => {
  const { hovered, active } = props;

  let stroke = '#CDCACA';
  let fill = '#CDCACA';
  if (hovered || active) {
    stroke = fill = '#ffca72';
  }

  return (
    <svg
      width='20px'
      height='20px'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.727 7.966v-5.92a1 1 0 0 1 1-1h3.796a1 1 0 0 1 1 1v5.92a1 1 0 0 1-1 1H2.727a1 1 0 0 1-1-1ZM16.182 1.045h-3.796a1 1 0 0 0-1 1v1.96a1 1 0 0 0 1 1h3.796a1 1 0 0 0 1-1v-1.96a1 1 0 0 0-1-1Z'
        stroke={stroke}
        strokeWidth={1.5}
      />
      <path
        d='M6.523 12.926H2.727a1 1 0 0 0-1 1v1.96a1 1 0 0 0 1 1h3.796a1 1 0 0 0 1-1v-1.96a1 1 0 0 0-1-1ZM16.182 9.46h-3.796a1 1 0 0 0-1 1v5.426a1 1 0 0 0 1 1h3.796a1 1 0 0 0 1-1V10.461a1 1 0 0 0-1-1Z'
        fill={fill}
      />
      <path
        d='M6.523 12.926H2.727a1 1 0 0 0-1 1v1.96a1 1 0 0 0 1 1h3.796a1 1 0 0 0 1-1v-1.96a1 1 0 0 0-1-1ZM16.182 9.46h-3.796a1 1 0 0 0-1 1v5.426a1 1 0 0 0 1 1h3.796a1 1 0 0 0 1-1V10.461a1 1 0 0 0-1-1Z'
        stroke={stroke}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const OrganizationIcon = (props: Props) => {
  let fill = '#CDCACA';
  if (props.hovered || props.active) {
    fill = '#ffca72';
  }

  return (
    <svg
      width={props.width ?? 18}
      height={props.height ?? 18}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect width={17} height={17} rx={8.5} fill={fill} />
      <path
        opacity={0.5}
        d='M11.806 8.815a1.416 1.416 0 1 0 0-2.832 1.416 1.416 0 0 0 0 2.832ZM5.194 8.815a1.416 1.416 0 1 0 .002-2.832 1.416 1.416 0 0 0-.002 2.832Z'
        fill='#26303E'
      />
      <path
        d='M8.59 8.27c.943 0 1.706-.794 1.706-1.774S9.533 4.722 8.59 4.722c-.942 0-1.705.794-1.705 1.774S7.648 8.27 8.59 8.27Z'
        fill='#26303E'
      />
      <path
        opacity={0.5}
        d='M13.79 11.334H9.82a.315.315 0 0 1-.31-.371l.283-1.57c.02-.111.1-.203.207-.24l.818-.284a.352.352 0 0 1 .295.038c.554.333 1.077.19 1.373.013a.384.384 0 0 1 .32-.046l.803.278c.107.038.186.13.206.242l.284 1.569a.315.315 0 0 1-.31.37ZM7.179 11.334H3.21a.315.315 0 0 1-.31-.371l.283-1.57c.02-.111.1-.203.207-.24l.818-.284a.352.352 0 0 1 .295.038c.554.333 1.077.19 1.373.013a.384.384 0 0 1 .32-.046l.803.278c.107.038.186.13.206.242l.284 1.569a.315.315 0 0 1-.31.37Z'
        fill='#26303E'
      />
      <path
        d='M11.274 11.648H5.727a.315.315 0 0 1-.31-.37l.414-2.366a.315.315 0 0 1 .204-.242l1.198-.427a.343.343 0 0 1 .301.041 1.712 1.712 0 0 0 1.924.015.367.367 0 0 1 .324-.051l1.183.422c.107.038.185.13.204.242l.415 2.367a.315.315 0 0 1-.31.369Z'
        fill='#26303E'
      />
    </svg>
  );
};

export const UsersIcon = (props: Props) => {
  let fill = '#CDCACA';
  if (props.hovered || props.active) {
    fill = '#ffca72';
  }

  return (
    <svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect y={0.5} width={17} height={17} rx={3} fill={fill} />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.998 11.563c.328.866-.035 1.835-.822 2.323a6.96 6.96 0 0 1-3.68 1.045 6.96 6.96 0 0 1-3.58-.984c-.797-.476-1.174-1.443-.858-2.316.71-1.956 2.45-3.339 4.483-3.339 2.01 0 3.732 1.35 4.457 3.27Z'
        fill='#26303E'
      />
      <circle cx={8.496} cy={5.017} r={1.947} fill='#26303E' />
    </svg>
  );
};
