import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DcuiButtonComponent } from '@datacolor/ui/button';
import { DcuiTableColumnDefinition, DcuiTableModule } from '@datacolor/ui/table'

@Component({
  selector: 'feature-table-data',
  templateUrl: './feature-table-data.container.html',
  styleUrl: './feature-table-data.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DcuiTableModule, DcuiButtonComponent],
  standalone: true,
})
export class FeatureTableDataContainer {
  public readonly title = input('');

  columnDefinitions: DcuiTableColumnDefinition[] = [
    {
      field: 'id',
      headerName: 'ID',
    },
    { field: 'name', headerName: 'Name' },
    { field: 'value', headerName: 'Value', sortable: true },
  ];
  data: { id: number; name: string; value: number }[] = [];

  constructor() {
    this.generateData();
  }

  generateData() {
    this.data = Array.from({ length: 7 }, (_, i) => ({
      id: i + 1,
      name: `Item ${Math.floor(Math.random() * 100)}`,
      value: Math.floor(Math.random() * 1000),
    }));
  }
}
