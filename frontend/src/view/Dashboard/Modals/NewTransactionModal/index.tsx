import { Controller } from 'react-hook-form';
import { Button } from '../../../components/Button';
import { DatePickerInput } from '../../../components/DatePickerInput';
import { Input } from '../../../components/Input';
import { InputCurrency } from '../../../components/InputCurrency';
import { Modal } from '../../../components/Modal';
import { Select } from '../../../components/Select';
import { useNewTransactionModalController } from './useNewTransactionModalController';

export function NewTransactionModal() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
    register,
    errors,
    control,
    handleSubmit,
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <Controller
              control={control}
              name="value"
              defaultValue="0"
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.value?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
            {...register('name')}
            error={errors.name?.message}
          />
          <Controller
            control={control}
            name="categoryId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                value={value}
                placeholder="Categoria"
                error={errors.categoryId?.message}
                options={[
                  {
                    label: 'Conta Corrente',
                    value: 'CHECKING',
                  },
                  {
                    label: 'Investimentos',
                    value: 'INVESTMENT',
                  },
                  {
                    label: 'Dinheiro Físico',
                    value: 'CASH',
                  },
                ]}
              />
            )}
          />
          <Controller
            control={control}
            name="bankAccountId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                value={value}
                error={errors.bankAccountId?.message}
                placeholder={isExpense ? 'Pagar com' : 'Receber com'}
                options={[
                  {
                    label: 'Conta Corrente',
                    value: 'CHECKING',
                  },
                  {
                    label: 'Investimentos',
                    value: 'INVESTMENT',
                  },
                  {
                    label: 'Dinheiro Físico',
                    value: 'CASH',
                  },
                ]}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            render={({ field: { value, onChange } }) => (
              <DatePickerInput value={value} onChange={onChange} />
            )}
          />
        </div>

        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
