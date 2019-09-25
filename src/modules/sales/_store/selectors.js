import { createSelector } from 'reselect';

const leadsObj = (state) => state.sales.leads;

const leads = createSelector(
  leadsObj,
  (leadsObjData) => {
    const leadsData = Object.values(leadsObjData);
    if (leadsData && leadsData.length) {
      return leadsData.map((item) => ({
        contactName: `${item.first_name} ${item.last_name}`,
        contactEmail: item.email_address,
        mobileNumber: item.mobile_no,
        dateCreated: item.date_created,
        dateModified: item.date_modified,
      }));
    }
    return [];
  },
);

export default {
  leads,
};
