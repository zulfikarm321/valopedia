import GridList from '@/components/GridList';
import Link from 'next/link';
import React from 'react';

function WeaponList({ data }: any) {
    return (
        <GridList min="300px" gap="20px">
            {data.map((weapon: any) => (
                <div
                    key={weapon.uuid}
                    className="group bg-white p-4 overflow-hidden border-2 border-dark shadow-md rounded-lg hover:bg-[#FF4655]"
                >
                    <Link href={'/weapons/' + weapon.uuid}>
                        <h1 className="uppercase text-xl font-bold mb-4 ">
                            {weapon.displayName}
                        </h1>
                        <div className="flex justify-center items-center">
                            <img
                                width={300}
                                src={weapon.displayIcon}
                                alt={weapon.displayName}
                            />
                        </div>
                    </Link>
                </div>
            ))}
        </GridList>
    );
}

export default WeaponList;