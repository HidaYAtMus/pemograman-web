import { TableService } from './table.service';
import { TestBed } from '@angular/core/testing';

describe('TableService', () =>{
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TableService = TestBed.get(TableService);
        expect(service).toBeTruthy();
    });
});