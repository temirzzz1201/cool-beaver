import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';

@Injectable()
export class ExcelService {
  async exportToExcel(data: any[], sheetName: string): Promise<ArrayBuffer> {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet(sheetName);

    if (data.length === 0) {
      sheet.addRow(['Нет данных']);
      return workbook.xlsx.writeBuffer();
    }

    const cleanData = data.map((item) => {
      if (typeof item.toJSON === 'function') {
        return item.toJSON();
      }
      return item;
    });

    const columns = Object.keys(cleanData[0]).map((key) => ({
      header: key,
      key,
      width: 20,
    }));
    sheet.columns = columns;

    cleanData.forEach((item) => {
      const flatItem: Record<string, any> = {};
      for (const key in item) {
        if (
          item[key] &&
          typeof item[key] === 'object' &&
          !Array.isArray(item[key])
        ) {
          for (const subKey in item[key]) {
            flatItem[`${key}.${subKey}`] = item[key][subKey];
          }
        } else {
          flatItem[key] = item[key];
        }
      }
      sheet.addRow(flatItem);
    });

    return workbook.xlsx.writeBuffer();
  }
}
