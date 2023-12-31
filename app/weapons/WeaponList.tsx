import GridList from '@/components/GridList';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function WeaponList({ data }: any) {
    return (
        <GridList>
            {data.map((weapon: any) => (
                <div
                    key={weapon.uuid}
                    className="group bg-white p-4 overflow-hidden border-2 border-dark shadow-md rounded-lg hover:bg-[#FF4655]"
                >
                    <Link href={'/weapons/' + weapon.uuid}>
                        <h1 className="uppercase text-xl font-bold mb-4 group-hover:text-white">
                            {weapon.displayName}
                        </h1>
                        <div className="flex justify-center items-center">
                            <Image
                                width={300}
                                height={100}
                                src={weapon.displayIcon}
                                alt={weapon.displayName}
                                className="w-full h-auto"
                            />
                        </div>
                    </Link>
                </div>
            ))}
        </GridList>
    );
}

export default WeaponList;
