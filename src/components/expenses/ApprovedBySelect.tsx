import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import { TranslatableField, translateError } from 'common/form/validation'
import { usePersonList } from 'common/hooks/person'
import { useField } from 'formik'
import { useTranslation } from 'react-i18next'

export default function ApprovedBySelect({ name = 'approvedById' }) {
  const { t } = useTranslation('expenses')
  const { data } = usePersonList()
  const [field, meta] = useField(name)

  const helperText = meta.touched ? translateError(meta.error as TranslatableField, t) : ''
  return (
    <FormControl
      fullWidth
      size="small"
      variant="outlined"
      error={Boolean(meta.error) && Boolean(meta.touched)}>
      <InputLabel>{t('fields.approvedBy')}</InputLabel>
      <Select fullWidth defaultValue="" label={t('fields.approvedBy')} {...field}>
        <MenuItem value="" disabled>
          {t('fields.approvedBy')}
        </MenuItem>
        <MenuItem key={'none'} value="">
          {t('fields.empty')}
        </MenuItem>
        {data?.map((person, index) => (
          <MenuItem key={index} value={person.id}>
            {person.firstName} {person.lastName}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  )
}
