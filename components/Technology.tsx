type Props = {
    icon: any;
};

const iconStyles = { width: '40px', height: '40px' };

export default function Technology({ icon: Icon }: Props) {
    return <Icon className='icon' style={{ ...iconStyles }} />;
}