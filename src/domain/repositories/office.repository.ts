import { UpdateOfficeFeesDto } from "src/application/dtos/office/Update-office-fees.dto";

export const OFFICE_REPOSITORY = 'OFFICE_REPOSITORY';

export interface OfficeRepositoryInterface { 
    findOneByUserId (userId: number);
    getCommission(officeId: number);
    getOfficeFees(userId: number);
    updateOfficeFees(userId: number,data:UpdateOfficeFeesDto);
}