/* eslint-disable @next/next/no-img-element */
export default function Loader() {
    return (
        <div className='loader'>
            <img
                src='/images/loader.png'
                width={100}
                height={100}
                alt='loader'
            />
        </div>
    );
}
