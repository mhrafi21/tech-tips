"use client";
import BackButton from "@/src/components/backButton/BackButton";
import EditModal from "@/src/components/editModal/EditModal";
import Image from "next/image";

const Profile = ({ params }: { params: Promise<{ profileId: string }> }) => {
  return (
    <div>
      <BackButton />
      <div>
        <div className="h-[12rem] w-full bg-gray-200">
          <Image src={""} height={500} />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="w-28 h-28 rounded-full bg-gray-500">
              <Image src={""} height={100} widht={100} />
            </div>
            <div>
              <EditModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
