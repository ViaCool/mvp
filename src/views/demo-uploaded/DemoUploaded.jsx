import React from 'react';
import Button from '../../components/common/Button';
import FileUplaod from '../../components/common/FileUplaod';
import SelectField from '../../components/common/SelectField';
import Appbar from '../../components/layout/Appbar';

function Predict() {
  return (
    <>
      <div className="px-2 mb-6">
        <Appbar title="Predict" />
        <div>
          <h6 className="font-semibold text-h4 text-dark mb-1.5">Produce</h6>
          <SelectField />
        </div>
      </div>
      <div className="flex gap-8 flex-col mb-16">
        <div>
          <FileUplaod
            files={[
              'QCCheck_54122_2022.csv',
              'QCCheck_54122_2022.csv',
              'QCCheck_54122_2022.csv',
              'QCCheck_54122_2022.csv',
              'QCCheck_54122_2022.csv',
              'QCCheck_54122_2022.csv',
              'QCCheck_54122_2022.csv',
              'QCCheck_54122_2022.csv',
              'QCCheck_54122_2022.csv',
              'QCCheck_54122_2022.csv',
            ]}
          />
        </div>
        <div className="w-full max-w-[426px]">
          <Button className="w-full" text="Predict" />
        </div>
      </div>
    </>
  );
}

export default Predict;
