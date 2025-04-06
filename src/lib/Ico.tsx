import React, { SVGProps } from 'react'
import { icons } from './Icons'

interface IconData {
  viewBox: string;
  svg: string;
}

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: keyof typeof icons;
}

const Ico: React.FC<IconProps> = ({ name, ...props }) => {
    const displayIcon: IconData | undefined = icons[name];
    if (!displayIcon) {
        return null; // Or handle the case where the icon is not found
  }
  const { viewBox, svg } = displayIcon;
  const svgString = svg
  
  return (
    <svg
      {...props}
      viewBox={viewBox}
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
};

export default Ico