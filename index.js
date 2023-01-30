const patrol_pay = 16.0;
const sgt_pay = 17.5;
const lt_pay = 19.0;
const chief_pay = 22.0;


const weekly_reg_hours = 34;
const abc_reg_hours = 6;
const weekly_ot_hours = 4;
const abc_ot_hours = 8;

const reg_budget_patrol = patrol_pay * weekly_reg_hours * 52 * 2;
const reg_budget_patrol_retire = reg_budget_patrol * 0.49;

const abc_budget_patrol = patrol_pay * abc_reg_hours * 52 * 2;
const abc_budget_patrol_retire = abc_budget_patrol * 0.49;

const reg_budget_sgt = sgt_pay * weekly_reg_hours * 52 * 2;
const reg_budget_sgt_retire = reg_budget_sgt * 0.49;

const abc_budget_sgt = sgt_pay * abc_reg_hours * 52 * 2;
const abc_budget_sgt_retire = abc_budget_sgt * 0.49;

const reg_budget_lt = lt_pay * weekly_reg_hours * 52 * 1;
const reg_budget_lt_retire = reg_budget_lt * 0.49;

const abc_budget_lt = lt_pay * abc_reg_hours * 52 * 1;
const abc_budget_lt_retire = abc_budget_lt * 0.49;

const reg_budget_chief = chief_pay * weekly_reg_hours * 52 * 1;
const reg_budget_chief_retire = reg_budget_chief * 0.49;

const abc_budget_chief = chief_pay * abc_reg_hours * 52 * 1;
const abc_budget_chief_retire = abc_budget_chief * 0.49;

const patrol_overtime_reg = patrol_pay * 1.5 * weekly_ot_hours * 26 * 2;
const patrol_overtime_retire = patrol_overtime_reg * 0.49;
const patrol_overtime_abc = patrol_pay * 1.5 * abc_ot_hours * 26 * 2;
const patrol_overtime_abc_retire = patrol_overtime_abc * 0.49;

const sgt_overtime_reg = sgt_pay * 1.5 * weekly_ot_hours * 26 * 2;
const sgt_overtime_retire = sgt_overtime_reg * 0.49;
const sgt_overtime_abc = sgt_pay * 1.5 * abc_ot_hours * 26 * 2;
const sgt_overtime_abc_retire = sgt_overtime_abc * 0.49;

const pd_regular_annual =
  reg_budget_patrol + reg_budget_sgt + reg_budget_lt + reg_budget_chief;
const pd_regular_annual_retire =
  reg_budget_patrol_retire +
  reg_budget_sgt_retire +
  reg_budget_lt_retire +
  reg_budget_chief_retire;

const pd_abc_annual =
  abc_budget_patrol + abc_budget_sgt + abc_budget_lt + abc_budget_chief;
const pd_abc_annual_retire =
  abc_budget_patrol_retire +
  abc_budget_sgt_retire +
  abc_budget_lt_retire +
  abc_budget_chief_retire;

const pd_regular_overtime = patrol_overtime_reg + sgt_overtime_reg;
const pd_regular_overtime_abc = patrol_overtime_abc + sgt_overtime_abc;

const pd_regular_overtime_retire = patrol_overtime_retire + sgt_overtime_retire;
const pd_regular_overtime_abc_retire =
  patrol_overtime_abc_retire + sgt_overtime_abc_retire;

const total_abc =
  pd_abc_annual +
  pd_abc_annual_retire +
  pd_regular_overtime_abc +
  pd_regular_overtime_abc_retire;

const total_reg_budget = pd_regular_annual + pd_regular_overtime;
const total_reg_budget_retire =
  pd_regular_overtime_retire + pd_regular_annual_retire;

const patrol_base_pay =
  (reg_budget_patrol +
    abc_budget_patrol +
    patrol_overtime_reg +
    patrol_overtime_abc +
    4600.0) /
  2;
const sgt_base_pay =
  (reg_budget_sgt +
    abc_budget_sgt +
    sgt_overtime_reg +
    sgt_overtime_abc +
    4600) /
  2;

const lt_base_pay = reg_budget_lt + abc_budget_lt + 4600;
const chief_base_pay = reg_budget_chief + abc_budget_chief + 4600;

console.log(`Total regular budget salary -- ${pd_regular_annual.toFixed(2)}\n`);
console.log(
  `Total regular budget retirement -- ${pd_regular_annual_retire}\n\n`
);

console.log(`Total abc budget salary -- ${pd_abc_annual}\n`);
console.log(`Total abc budget retirement -- ${pd_abc_annual_retire}\n\n`);

console.log(`Total regular budget overtime -- ${pd_regular_overtime}\n`);
console.log(
  `Total regular budget overtime retirement -- ${pd_regular_overtime_retire}\n\n`
);

console.log(`Total abc budget overtime -- ${pd_regular_overtime_abc}\n`);
console.log(
  `Total abc budget overtime retirement -- ${pd_regular_overtime_abc_retire}\n\n`
);
console.log(`Total abc budget -- ${total_abc}\n\n`);

console.log(`Total regular budget -- ${total_reg_budget}\n\n`);
console.log(`Total regular budget retire -- ${total_reg_budget_retire.toFixed(2)}\n\n`);
console.log(`Total Patrol base pay -- ${patrol_base_pay}\n\n`);
console.log(`Total sgt base pay -- ${sgt_base_pay}\n\n`);
console.log(`Total lt base pay -- ${lt_base_pay}\n\n`);
console.log(`Total chief base pay -- ${chief_base_pay}\n\n`);
