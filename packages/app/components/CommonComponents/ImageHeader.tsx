import { BeneficiaryApplication } from '@popcorn/contracts/adapters';

export interface ImageHeaderProps {
  beneficiary: BeneficiaryApplication;
  title?: string;
}

const ImageHeader: React.FC<ImageHeaderProps> = ({
  beneficiary,
  title,
}) => {
  return (
    <div>
      <div>
        <img
          className="h-32 w-full object-cover lg:h-48"
          src={`${process.env.IPFS_URL}${beneficiary?.files?.headerImage?.image}`}
          alt=""
        />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={`${process.env.IPFS_URL}${beneficiary?.files?.profileImage?.image}`}
              alt={beneficiary?.files?.headerImage?.description}
            />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {title ? title : beneficiary.organizationName}
              </h1>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate">
            {title ? title : beneficiary.organizationName}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default ImageHeader;
